const db = require('../config/db');
const path = require('path');
const model_path = path.join(__dirname) + '/';

//实例化模型
const userInfo = db.import(model_path +'userInfo.js');
const course = db.import(model_path + 'course.js');
const knowledge_point = db.import(model_path + 'knowledge_point.js');
const question = db.import(model_path + 'question.js');
const options = db.import(model_path + 'options.js');
const tag = db.import(model_path + 'tag.js');
const answer_info = db.import(model_path + 'answer_info.js');

const models = {
    userInfo: userInfo,
    course: course,
    knowledge_point: knowledge_point,
    question: question,
    options: options,
    tag: tag,
    answer_info: answer_info
};

module.exports = models;
