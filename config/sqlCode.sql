CREATE DATABASE OPENENDEDLAB;
USE OPENENDEDLAB;

CREATE TABLE Courses (
    course_id VARCHAR(20) PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    instructor_name VARCHAR(100) NOT NULL
);

CREATE TABLE Students (
    student_id VARCHAR(30) PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Enrollments (
    enrollment_id VARCHAR(20) PRIMARY KEY,
    student_id VARCHAR(30) NOT NULL,
    course_id VARCHAR(20) NOT NULL,
    grade VARCHAR(10),
    FOREIGN KEY (student_id) REFERENCES Students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);