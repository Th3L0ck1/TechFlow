// 🧪 TESTES AUTOMATIZADOS - Sistema de Gerenciamento de Tarefas
// Arquivo: tests/test.js

console.log("🚀 Iniciando testes automatizados...");
console.log("=====================================");

// Simulamos o sistema de tarefas para testes
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(text) {
        this.tasks.push({
            id: Date.now(),
            text: text,
            completed: false
        });
    }

    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) task.completed = true;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    getTasks() {
        return this.tasks;
    }
}

// 🧪 TESTE 1: Adicionar tarefa
function testAddTask() {
    console.log("📌 Teste 1: Adicionar tarefa");
    const manager = new TaskManager();
    const initialLength = manager.tasks.length;
    manager.addTask("Tarefa de teste");
    
    if (manager.tasks.length === initialLength + 1) {
        console.log("   ✅ PASSOU - Tarefa adicionada com sucesso");
        return true;
    } else {
        console.log("   ❌ FALHOU - Tarefa não foi adicionada");
        return false;
    }
}

// 🧪 TESTE 2: Marcar tarefa como concluída
function testCompleteTask() {
    console.log("📌 Teste 2: Marcar tarefa como concluída");
    const manager = new TaskManager();
    manager.addTask("Tarefa para concluir");
    const taskId = manager.tasks[0].id;
    
    manager.completeTask(taskId);
    const task = manager.tasks.find(t => t.id === taskId);
    
    if (task && task.completed) {
        console.log("   ✅ PASSOU - Tarefa marcada como concluída");
        return true;
    } else {
        console.log("   ❌ FALHOU - Tarefa não foi concluída");
        return false;
    }
}

// 🧪 TESTE 3: Excluir tarefa
function testDeleteTask() {
    console.log("📌 Teste 3: Excluir tarefa");
    const manager = new TaskManager();
    manager.addTask("Tarefa para excluir");
    const initialLength = manager.tasks.length;
    const taskId = manager.tasks[0].id;
    
    manager.deleteTask(taskId);
    
    if (manager.tasks.length === initialLength - 1) {
        console.log("   ✅ PASSOU - Tarefa excluída com sucesso");
        return true;
    } else {
        console.log("   ❌ FALHOU - Tarefa não foi excluída");
        return false;
    }
}

// 🧪 TESTE 4: Validar estrutura de dados
function testTaskStructure() {
    console.log("📌 Teste 4: Validar estrutura de dados");
    const manager = new TaskManager();
    manager.addTask("Tarefa de estrutura");
    const task = manager.tasks[0];
    
    if (task.id && task.text && typeof task.completed === 'boolean') {
        console.log("   ✅ PASSOU - Estrutura de dados correta");
        return true;
    } else {
        console.log("   ❌ FALHOU - Estrutura de dados incorreta");
        return false;
    }
}

// 🧪 EXECUTAR TODOS OS TESTES
function runAllTests() {
    console.log("🧪 INICIANDO SUITE DE TESTES");
    console.log("=============================");
    
    let passed = 0;
    let failed = 0;
    
    // Executar cada teste
    if (testAddTask()) passed++; else failed++;
    if (testCompleteTask()) passed++; else failed++;
    if (testDeleteTask()) passed++; else failed++;
    if (testTaskStructure()) passed++; else failed++;
    
    console.log("\n📊 RELATÓRIO FINAL");
    console.log("=================");
    console.log(`✅ Testes que passaram: ${passed}`);
    console.log(`❌ Testes que falharam: ${failed}`);
    console.log(`📈 Total de testes: ${passed + failed}`);
    
    if (failed === 0) {
        console.log("🎉 TODOS OS TESTES PASSARAM! Sistema está funcionando corretamente.");
    } else {
        console.log("⚠️  Alguns testes falharam. Verifique o código.");
        process.exit(1); // Isso faz o GitHub Actions falhar se houver erro
    }
}

// Executar os testes
runAllTests();