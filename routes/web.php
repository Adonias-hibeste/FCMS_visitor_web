<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return view('welcome');
});


//Route::middleware('auth:admin')->group(function () {

    Route::get('/admin/register', [AdminController::class, 'register'])->name('admin.register');
    Route::post('/admin/register', [AdminController::class, 'registerPost'])->name('admin.registerPost');
    Route::get('/admin/login', [AdminController::class, 'login'])->name('admin.login');
    Route::post('/admin/login', [AdminController::class, 'loginPost'])->name('admin.loginPost');
   Route::get('/admin/dashboard',function(){
       return view ('admin.dashboard');
   })->name('admin.dashboard');
 //});



   
