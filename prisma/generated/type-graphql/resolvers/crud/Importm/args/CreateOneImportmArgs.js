"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmCreateInput_1 = require("../../../inputs/ImportmCreateInput");
let CreateOneImportmArgs = class CreateOneImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmCreateInput_1.ImportmCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmCreateInput_1.ImportmCreateInput)
], CreateOneImportmArgs.prototype, "data", void 0);
CreateOneImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneImportmArgs);
exports.CreateOneImportmArgs = CreateOneImportmArgs;
