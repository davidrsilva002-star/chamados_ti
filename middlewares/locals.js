const constants = require( '../config/contants');
const hespers = require('.. ');

//Disponibiliza constantes, helpers e mensagens de feedback em todas as views.
//As mensagens são enviadas via query string ( ?msg=... / ?erro=...) após redirecionamento,
//evitando a necessidade de sessão/login
module.exports = (req, res, next) => {
    Object.assign(res.locals, contants, helpers);
    res.locals.msg = req.query.msg || null;
    res.locals.currentPath = req.path;
    res.locals.title = 'helpDesk TI';
    next();
}