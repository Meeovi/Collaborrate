"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmUpdateManyMutationInput_1 = require("../../../inputs/ImportmUpdateManyMutationInput");
const ImportmWhereInput_1 = require("../../../inputs/ImportmWhereInput");
let UpdateManyImportmArgs = class UpdateManyImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmUpdateManyMutationInput_1.ImportmUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmUpdateManyMutationInput_1.ImportmUpdateManyMutationInput)
], UpdateManyImportmArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereInput_1.ImportmWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmWhereInput_1.ImportmWhereInput)
], UpdateManyImportmArgs.prototype, "where", void 0);
UpdateManyImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyImportmArgs);
exports.UpdateManyImportmArgs = UpdateManyImportmArgs;
