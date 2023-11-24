/*
const mongoose = require('mongoose');

// Assuming you have a connection for the second database
const seconddatabase=mongoose.createConnection('mongodb+srv://svnmurali1:12345@cluster0.thuw9pg.mongodb.net/logins?retryWrites=true&w=majority')

const loginSchema = mongoose.Schema({
    rollnumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


const LoginModel = seconddatabase.model('LoginModel', loginSchema);


module.exports = LoginModel;
*/
// Online Java Compiler
// Use this editor to write, compile and run your Java code online

import java.util.*;

public class loginmodel {
  public static void main(String[] args) {
    System.out.println("Hello World!");
    ArrayList<String> obj=new ArrayList<String>();
    obj.add("Hello");
    obj.add("murali");
    obj.add("svnm");
    ListIterator iterator =obj.listIterator();
    int i=0;
    while (iterator.hasNext()){
    
    if (i==1){
    System.out.println(i);
    iterator.remove();}
    System.out.println(iterator.next());
    i++;
    }
    ListIterator iterator1 =obj.listIterator();
    while (iterator1.hasNext()){
    System.out.println(iterator1.next());
    
    }
  }
}
  