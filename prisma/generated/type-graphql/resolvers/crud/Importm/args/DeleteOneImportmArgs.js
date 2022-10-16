"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmWhereUniqueInput_1 = require("../../../inputs/ImportmWhereUniqueInput");
let DeleteOneImportmArgs = class DeleteOneImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereUniqueInput_1.ImportmWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmWhereUniqueInput_1.ImportmWhereUniqueInput)
], DeleteOneImportmArgs.prototype, "where", void 0);
DeleteOneImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneImportmArgs);
exports.DeleteOneImportmArgs = DeleteOneImportmArgs;
