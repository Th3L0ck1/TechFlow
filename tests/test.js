// tests/test.js
let tasks = [];

function addTask(text) {
    tasks.push({
        id: Date.now(),
        text: text,
        completed: false
    });
}

function testAddTask() {
    const initialLength = tasks.length;
    addTask("Test task");
    
    if (tasks.length === initialLength + 1) {
        console.log("✅ Teste de adicionar tarefa: PASSOU");
        return true;
    } else {
        console.log("❌ Teste de adicionar tarefa: FALHOU");
        return false;
    }
}

// Executar teste
testAddTask();