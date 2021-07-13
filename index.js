// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
// ```js
//   const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//   console.log(name, skills, scores)
//   console.log(jsScore, reactScore)

//  Write a function called convertArrayToObject which can convert the array to a structured object.

const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React',], [98, 85, 90, 95,]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(students){
let obj_set =[]
for(let value of students){

obj_set.push(Object.assign({"name":value[0],"skills":value[1],"scores":value[2]}))

} 
return obj_set;  
}

const student_obj = convertArrayToObject(students)
const newStudent_obj = student_obj

function skillvalueadd(skill,value){
let newobj = {}
newobj["skill"] = skill
newobj["value"] = 10
return newobj;
}
let v1 = skillvalueadd("HTM",10)
console.log(v1)
let newstud_arr = []
for(let obj of newStudent_obj){
    let skills_arr = []
    let frontend = []
    for(let skill of obj.skills){
        let newobj = {}
        newobj["skill"] = skill
        newobj["value"] = 10
        frontend.push(newobj)
    }
    skills_arr.push(Object.assign({"frontend":frontend[0]}))
    console.log(skills_arr)
}
console.log(newStudent_obj)