"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmCreateManyInput_1 = require("../../../inputs/ImportmCreateManyInput");
let CreateManyImportmArgs = class CreateManyImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmCreateManyInput_1.ImportmCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyImportmArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyImportmArgs.prototype, "skipDuplicates", void 0);
CreateManyImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyImportmArgs);
exports.CreateManyImportmArgs = CreateManyImportmArgs;
