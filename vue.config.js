const path=require("path")
module.exports={
    devServer:{
        proxy:{
            "/home":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            },
            "/vip":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            },
            "/city":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            },
            "/Schedule":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                secure: false
            }
        }
    }, 
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "lib":path.join(__dirname,"./src/lib"),
            }
        }
    }
}
