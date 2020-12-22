const util = require('util'),
      Promise = require('bluebird');

const Pool = require('../pool');

const sql1 = 'update test1 set phone="010-1111-2222" where id = "id1"';
const sql2 = 'update test1 set phone="010-1111-3333" where id = "id1"';

const pool = new Pool();

function execute(fn) {
    Promise.using(pool.connect(), conn => {
        conn.beginTransaction( txerr => {
            fn(conn);
        });
    });
}

execute( conn => {
    Promise.all([
        conn.queryAsync(sql1),
        conn.queryAsync(sql2)

    ]).then( r => {
        util.log('End of Then!!!!!!');
        util.log('sql1 = ', r[0].affectedRows);
        util.log('sql1 = ', r[1].affectedRows);
        conn.commit();
        pool.end();
        
    }).catch(err => {
        util.log('ERR >>>>>>>>>>>>', err);
        conn.rollback();
        pool.end();
    });
});


// Promise.using(pool.connect(), conn => {
//     conn.beginTransaction( txerr => {
//         Promise.all([
//             conn.queryAsync(sql1),
//             conn.queryAsync(sql2)
    
//         ]).then( r => {
//             util.log('End of Then!!!!!!');
//             util.log('sql1 = ', r[0].affectedRows);
//             util.log('sql1 = ', r[1].affectedRows);
//             conn.commit();
//             pool.end();
            
//         }).catch(err => {
//             util.log('ERR >>>>>>>>>>>>', err);
//             conn.rollback();
//             pool.end();
//         });
//     });
//     // pool.end();
// });


// Promise.using(pool.connect(), conn => {
//     Promise.all([
//         conn.queryAsync(sql1),
//         conn.queryAsync(sql2)

//     ]).then( r => {
//         util.log('End of Then!!!!!!');
//         util.log('sql1 = ', r[0].affectedRows);
//         util.log('sql1 = ', r[1].affectedRows);
        
//     }).catch(err => {
//         util.log('ERR >>>>>>>>>>>>', err);
//         // pool.end();
//     });
    
//     pool.end();
// });

// Promise.using(pool.connect(), conn => {
//     conn.queryAsync(sql1)
//         .then(console.log)
//         .catch(err => {
//             util.log('ERR >>>>>>>>>>>>', err);
//         })
//     pool.end();
// });


// Promise.using(pool.connect(), conn => {
//     conn.queryAsync(sql1, (err, ret) => {
//         util.log('sql1 = ', ret.affectedRows);
//         // conn.queryAsync(sql2, (err2, ret2) => {
//         //     util.log('sql2 = ', ret2.affectedRows);
//         // });
//     });
//     pool.end();
// });
