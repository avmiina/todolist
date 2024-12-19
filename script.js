// HTML-dən lazım olan elementlər alınır
const textInput = document.getElementById("textInput"); // İstifadəçi tərəfindən tapşırıq daxil ediləcək input sahəsi
const buttonAdd = document.getElementById("add"); // "Add" düyməsi
const buttonReset = document.getElementById("reset"); // "Reset" düyməsi
const taskList = document.getElementById("taskList"); // Tapşırıqların yerləşəcəyi <ul> elementini alırıq

// "Add" düyməsinə basıldığında aşağıdakı əməliyyatlar baş verir
buttonAdd.addEventListener("click", () => {
    // Input sahəsindəki mətni alırıq və başlanğıc və sonundakı boşluqları təmizləyirik
    const taskText = textInput.value.trim(); 

    // Əgər input boş deyilsə (yəni istifadəçi heç bir şey yazmayıbsa)
    if (taskText !== "") {
        // Yeni bir <li> elementi yaradılır
        const li = document.createElement("li");
        
        // Yaradılan <li> elementinə Tailwind CSS sinifləri əlavə olunur
        li.classList.add("task", "text-lg", "p-2", "border-b", "border-gray-300", "hover:bg-purple-100", "cursor-pointer");

        // Tapşırıq mətnini <li> elementinə əlavə edirik
        li.textContent = taskText;

        // Tapşırıq üzərinə kliklədikdə aşağıdakı əməliyyat baş verir
        li.addEventListener("click", () => {
            // Tapşırıq tamamlanıbsa, üzərindən xətt çəkilir (line-through) və rəngi boz olur (text-gray-300)
            li.classList.toggle("line-through"); 
            li.classList.toggle("text-gray-300");
        });

        // Yaradılan <li> elementini tapşırıq siyahısına (ul) əlavə edirik
        taskList.appendChild(li);

        // Input sahəsini təmizləyirik
        textInput.value = "";
    }
});

// "Reset" düyməsinə basıldığında aşağıdakı əməliyyat baş verir
buttonReset.addEventListener("click", () => {
    // Bütün tapşırıqları silirik
    taskList.innerHTML = "";
    
    // Input sahəsini təmizləyirik
    textInput.value = "";
});
