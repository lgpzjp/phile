const fs = require('fs');

exports.getAllDirs = (callback)=>{
    fs.readdir('./uploads',(err,files)=>{
        if(err)
            throw err;
        let allDirs = [];
        //为什么ES6规则必须加分号才行呢？以后还是加上分号
        (iterator=(i)=>{
            if(i == files.length){
                console.log(allDirs);
                callback(allDirs);
                return;
            }
            fs.stat('./uploads/'+files[i],(err, stats)=>{
                if(stats.isDirectory()){
                    allDirs.push(files[i]);
                }
                iterator(i+1);
            })
        })(0);
    })
}