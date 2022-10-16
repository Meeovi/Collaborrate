"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistWhereUniqueInput_1 = require("../../../inputs/ChecklistWhereUniqueInput");
let DeleteOneChecklistArgs = class DeleteOneChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChecklistWhereUniqueInput_1.ChecklistWhereUniqueInput)
], DeleteOneChecklistArgs.prototype, "where", void 0);
DeleteOneChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneChecklistArgs);
exports.DeleteOneChecklistArgs = DeleteOneChecklistArgs;
