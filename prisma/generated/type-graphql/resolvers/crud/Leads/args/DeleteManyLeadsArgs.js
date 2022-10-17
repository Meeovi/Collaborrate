"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsWhereInput_1 = require("../../../inputs/LeadsWhereInput");
let DeleteManyLeadsArgs = class DeleteManyLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereInput_1.LeadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsWhereInput_1.LeadsWhereInput)
], DeleteManyLeadsArgs.prototype, "where", void 0);
DeleteManyLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyLeadsArgs);
exports.DeleteManyLeadsArgs = DeleteManyLeadsArgs;
