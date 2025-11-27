// ======================================================
// Génération des formulaires dynamiques (v0.4.3)
// ======================================================

export function generateDynamicForm(schema, onUpdate) {

    const container = document.getElementById("formZone");
    container.innerHTML = "";

    const vars = {};

    schema.variables.forEach(v => {
        const div = document.createElement("div");
        div.className = "form-line";

        const label = document.createElement("label");
        label.textContent = v.label;

        const input = document.createElement("input");
        input.type = v.type;
        input.id = `var_${v.id}`;

        input.oninput = () => {
            vars[v.id] = input.value;
            onUpdate(vars);
        };

        div.appendChild(label);
        div.appendChild(input);
        container.appendChild(div);
    });
}
