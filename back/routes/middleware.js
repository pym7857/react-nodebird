exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {    // req.isAuthenticated(): express와 passport에서 로그인했는지 판단하는 공식함수 
        next();                     // next()를 하면 다음 미들웨어로 ! 
    } else {
        res.status(401).send('로그인이 필요합니다.');    // next()없으므로 다음 미들웨어로 안넘어가고 여기서 끝나버림 
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {    
        next();                    
    } else {
        res.status(401).send('로그인된 사용자는 접근할 수 없습니다.');   
    }
}

// exports.isAdmin = ()