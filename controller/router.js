const dirs = require('../models/dirs')

exports.showIndex = (req,res) => {
    // 直接渲染不行的，获取不到异步的值
    // res.render('index',{'alldirs':dirs.getAllDirs()})

    // dirs.getAllDirs(alldirs=>{
    //     console.log(alldirs)
    //     res.render('index',{'alldirs':alldirs})
    // })

    let alldirs = dirs.getSyncAll()
    console.log(alldirs)
    res.render('index',{'alldirs':alldirs})
}