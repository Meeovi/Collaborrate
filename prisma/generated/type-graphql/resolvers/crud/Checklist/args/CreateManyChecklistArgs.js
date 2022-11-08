"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistCreateManyInput_1 = require("../../../inputs/ChecklistCreateManyInput");
let CreateManyChecklistArgs = class CreateManyChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChecklistCreateManyInput_1.ChecklistCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyChecklistArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyChecklistArgs.prototype, "skipDuplicates", void 0);
CreateManyChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyChecklistArgs);
exports.CreateManyChecklistArgs = CreateManyChecklistArgs;
