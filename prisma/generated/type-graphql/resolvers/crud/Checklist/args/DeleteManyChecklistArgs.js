"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyChecklistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistWhereInput_1 = require("../../../inputs/ChecklistWhereInput");
let DeleteManyChecklistArgs = class DeleteManyChecklistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistWhereInput_1.ChecklistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistWhereInput_1.ChecklistWhereInput)
], DeleteManyChecklistArgs.prototype, "where", void 0);
DeleteManyChecklistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyChecklistArgs);
exports.DeleteManyChecklistArgs = DeleteManyChecklistArgs;
