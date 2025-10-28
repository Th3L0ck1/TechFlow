// Teste simples - você pode usar Jest posteriormente
function testAddTask() {
    const initialLength = tasks.length;
    tasks.push({ id: 1, text: "Test task", completed: false });
    
    if (tasks.length === initialLength + 1) {
        console.log("✅ Teste de adicionar tarefa: PASSOU");
    } else {
        console.log("❌ Teste de adicionar tarefa: FALHOU");
    }
}

// Executar teste
testAddTask();