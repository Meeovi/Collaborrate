"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsWhereUniqueInput_1 = require("../../../inputs/LeadsWhereUniqueInput");
let DeleteOneLeadsArgs = class DeleteOneLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereUniqueInput_1.LeadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsWhereUniqueInput_1.LeadsWhereUniqueInput)
], DeleteOneLeadsArgs.prototype, "where", void 0);
DeleteOneLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneLeadsArgs);
exports.DeleteOneLeadsArgs = DeleteOneLeadsArgs;
