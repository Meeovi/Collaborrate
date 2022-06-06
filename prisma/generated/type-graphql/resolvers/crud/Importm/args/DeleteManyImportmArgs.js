"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmWhereInput_1 = require("../../../inputs/ImportmWhereInput");
let DeleteManyImportmArgs = class DeleteManyImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereInput_1.ImportmWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmWhereInput_1.ImportmWhereInput)
], DeleteManyImportmArgs.prototype, "where", void 0);
DeleteManyImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyImportmArgs);
exports.DeleteManyImportmArgs = DeleteManyImportmArgs;
