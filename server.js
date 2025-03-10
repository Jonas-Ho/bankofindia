// Add these middlewares at the top
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// Update the registration handler
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username and password required' 
        });
    }
    
    if (accounts.some(acc => acc.username === username)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username already exists' 
        });
    }
    
    accounts.push({
        username,
        password,
        balance: 0,
        transactions: []
    });
    
    fs.writeFileSync('db.json', JSON.stringify(accounts, null, 2));
    res.json({ success: true });
});