"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsWhereUniqueInput_1 = require("../../../inputs/LeadsWhereUniqueInput");
let FindUniqueLeadsArgs = class FindUniqueLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereUniqueInput_1.LeadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsWhereUniqueInput_1.LeadsWhereUniqueInput)
], FindUniqueLeadsArgs.prototype, "where", void 0);
FindUniqueLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLeadsArgs);
exports.FindUniqueLeadsArgs = FindUniqueLeadsArgs;
