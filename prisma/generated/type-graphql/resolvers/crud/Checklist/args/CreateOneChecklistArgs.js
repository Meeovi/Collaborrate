"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistCreateInput_1 = require("../../../inputs/ChecklistCreateInput");
let CreateOneChecklistArgs = class CreateOneChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistCreateInput_1.ChecklistCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistCreateInput_1.ChecklistCreateInput)
], CreateOneChecklistArgs.prototype, "data", void 0);
CreateOneChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneChecklistArgs);
exports.CreateOneChecklistArgs = CreateOneChecklistArgs;
