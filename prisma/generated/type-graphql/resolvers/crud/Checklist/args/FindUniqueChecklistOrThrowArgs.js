"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChecklistOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistWhereUniqueInput_1 = require("../../../inputs/ChecklistWhereUniqueInput");
let FindUniqueChecklistOrThrowArgs = class FindUniqueChecklistOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput)
], FindUniqueChecklistOrThrowArgs.prototype, "where", void 0);
FindUniqueChecklistOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueChecklistOrThrowArgs);
exports.FindUniqueChecklistOrThrowArgs = FindUniqueChecklistOrThrowArgs;
