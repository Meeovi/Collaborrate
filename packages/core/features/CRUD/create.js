export default function createTable() {

    return `
    <form action="" method="post" @v-on:submit.prevent="addDatabaseTable()">
    <v-toolbar dark style="background-color: azure; color: black;">
        <v-btn icon dark @click="dialog = false">
            <v-icon icon="fas fa-circle-xmark"></v-icon>
        </v-btn>
        <v-card-title>
            <span class="text-h6">Create new table</span>
        </v-card-title>
    </v-toolbar>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="tableName" label="Name*" id="tableName" required>
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="tableDescription" label="Description" id="tableDescription"
                        hint="Optional"></v-text-field>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="6">
                    <div class="text-subtitle-1 text-medium-emphasis">Broadcast changes to eligible
                        users?</div>
                    <v-autocomplete v-model="tableBroadcast" id="tableBroadcast"
                        :items="['Broadcast', 'Disable']" label="Notifications"></v-autocomplete>
                </v-col>
                <v-col cols="6">
                    <div class="text-subtitle-1 text-medium-emphasis">Who can see this content?</div>
                    <v-autocomplete v-model="tableVisible" id="tableVisible"
                        :items="['Public', 'Private']" label="Visibility"></v-autocomplete>
                </v-col>
                <v-divider></v-divider>
                <br>
                <v-col cols="3">
                    <v-text-field v-model="tableColumnName" id="columnName" label="Column Name"
                        hint="Column Name"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-select v-model="tableColumnType" id="columnType"
                        :items="['Integer', 'BigInteger', 'Text', 'Boolean', 'SmallInteger', 'Datetime', 'Float', 'Json', 'Bytes', 'Decimal']"
                        label="Type*" required></v-select>
                </v-col>
                <v-col cols="2">
                    <v-autocomplete v-model="tableColumnDefault" id="columnDefaultName"
                        :items="['Set as NULL', 'Set as empty string']" label="Default Value">
                    </v-autocomplete>
                </v-col>
                <v-col cols="1"><v-checkbox label="Primary"></v-checkbox></v-col>
                <v-col cols="2">
                    <v-autocomplete v-model="tableColumnDefault" id="columnDefaultName"
                        :items="['Is Nullable', 'Is Unique', 'Define as Array']" label="Extra Options" prepend-icon="fas fa-cog">
                    </v-autocomplete>
                </v-col>
                <v-col cols="9">
                    <v-btn variant="text" prepend-icon="fas fa-plus">Add Column</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn variant="text" size="x-small" prepend-icon="fas fa-arrow-up-right-from-square" href="https://www.alternatecms.com/docs/data-types">Learn more about data types</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Create
        </v-btn>
    </v-card-actions>
</form>
    `
}