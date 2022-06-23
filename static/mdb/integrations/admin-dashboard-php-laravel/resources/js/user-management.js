const table = document.getElementById("user-table");
const columns = [];
const rows = [];

const tableEditorInstace = new TableEditor(
    table,
    {
        columns,
        rows
    },
    {
        mode: "modal",
        entries: 5,
        entriesOptions: [5, 10, 15],
        loading: true
    }
);

getTableData();

async function getTableData() {
    const usersUrl = "/users";
    const rolesUrl = "/roles";

    const fetchData = url =>
        fetch(url)
            .then(handleResponse)
            .catch(error => console.log(error));

    const [users, roles] = await Promise.all([
        fetchData(usersUrl),
        fetchData(rolesUrl)
    ]);

    const roleNames = roles.map(role => role.name);

    const columns = getColumns(roleNames);
    const rows = getRows(users);

    tableEditorInstace.update(
        {
            columns,
            rows
        },
        {
            loading: false
        }
    );
}

function handleResponse(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
}

function getColumns(roleNames) {
    return [
        {
            label: "Username",
            field: "name",
            editable: false
        },
        {
            label: "Email",
            field: "email",
            editable: false
        },
        {
            label: "Role",
            field: "role",
            inputType: "select",
            options: roleNames,
            editable: true
        },
        {
            label: "Registered",
            field: "created_at",
            editable: false
        }
    ];
}

function getRows(users) {
    return users.map(user => ({
        ...user,
        role: user.role.name
    }));
}

table.addEventListener("updateEntry.mdb.tableEditor", handleUpdate);
table.addEventListener("delete.mdb.tableEditor", handleDelete);

function handleUpdate(event) {
    if (event.row && event.row.role) {
        const token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        const url = `/users/${event.row.id}`;

        const username = event.row.name;
        const email = event.row.email;
        const roleId = event.row.role === "admin" ? 1 : 2;

        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            },
            method: "PUT",
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                email: email,
                roleId: roleId
            })
        })
            .then(handleResponse)
            .then(responseJson => console.log(responseJson))
            .catch(error => console.log(error));
    }
}

function handleDelete(event) {
    const token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const url = `/users/${event.row.id}`;

    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token
        },
        method: "DELETE",
        credentials: "same-origin"
    })
        .then(handleResponse)
        .then(responseJson => console.log(responseJson))
        .catch(error => console.log(error));
}
