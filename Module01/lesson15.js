// Classe Node que representa um nó na lista duplamente encadeada
class Node {
    constructor(data) {
      this.data = data;  // Armazena o valor do nó
      this.next = null;  // Aponta para o próximo nó na lista (inicialmente null)
      this.previous = null;  // Aponta para o nó anterior na lista (inicialmente null)
    }
  }
  
  // Classe que representa a lista duplamente encadeada
  class DoublyLinkedList {
    constructor() {
      this.head = null;  // O primeiro nó da lista (inicialmente null)
      this.tail = null;  // O último nó da lista (inicialmente null)
      this.size = 0;  // Tamanho da lista (número de nós na lista)
    }
  
    // Método para adicionar um nó ao final da lista
    add(data) {
      let newNode = new Node(data);  // Cria um novo nó com o dado fornecido
  
      if (this.head === null) {  // Se a lista estiver vazia (head é null)
        this.head = newNode;  // O novo nó se torna o head (primeiro nó)
        this.tail = newNode;  // O novo nó também se torna o tail (último nó)
      } else {
        this.tail.next = newNode;  // O nó atual no final (tail) aponta para o novo nó como próximo
        newNode.previous = this.tail;  // O novo nó aponta para o antigo tail como seu nó anterior
        this.tail = newNode;  // O novo nó se torna o novo tail da lista
      }
  
      this.size++;  // Incrementa o tamanho da lista
    }
  
    // Método para inserir um nó em uma posição específica da lista
    insertAt(data, index) {
      // Verifica se o índice é válido (dentro dos limites da lista)
      if (index < 0 || index > this.size) {
        return console.log("Index fora dos limites!");  // Sai do método se o índice for inválido
      }
  
      let newNode = new Node(data);  // Cria um novo nó com o dado fornecido
      let current = this.head;  // Começa a busca a partir do head (primeiro nó)
      let previous = null;  // Para armazenar o nó anterior durante a iteração
  
      if (index === 0) {  // Se o índice for 0, insere no início da lista
        if (this.head === null) {  // Se a lista estiver vazia
          this.head = newNode;  // O novo nó se torna o head
          this.tail = newNode;  // O novo nó se torna o tail também
        } else {
          newNode.next = this.head;  // O novo nó aponta para o antigo head como próximo
          this.head.previous = newNode;  // O antigo head aponta para o novo nó como anterior
          this.head = newNode;  // O novo nó se torna o head da lista
        }
      } else if (index === this.size) {  // Se o índice for igual ao tamanho da lista, insere no final
        this.tail.next = newNode;  // O tail atual aponta para o novo nó como próximo
        newNode.previous = this.tail;  // O novo nó aponta para o tail como anterior
        this.tail = newNode;  // O novo nó se torna o novo tail da lista
      } else {  // Caso contrário, insere no meio da lista
        for (let i = 0; i < index; i++) {  // Itera até encontrar a posição correta
          previous = current;  // O nó anterior ao atual
          current = current.next;  // Avança para o próximo nó
        }
        
        newNode.next = current;  // O novo nó aponta para o nó atual como próximo
        newNode.previous = current.previous;  // O novo nó aponta para o nó anterior do nó atual como anterior
  
        current.previous.next = newNode;  // O nó anterior ao atual aponta para o novo nó como próximo
        current.previous = newNode;  // O nó atual aponta para o novo nó como anterior
      }
  
      this.size++;  // Incrementa o tamanho da lista
    }
  }