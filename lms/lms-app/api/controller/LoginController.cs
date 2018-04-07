using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
public class LoginController : Controller{


[HttpGet("{userName}/{password}")]
public User Get(string userName, string password){
    var user = new User();
    if(userName.ToLower()== "admin" && password.ToLower() == "password"){
        user.IsValidUser = true;
        user.Name = "Admin User";
    }
    return user;
}
}