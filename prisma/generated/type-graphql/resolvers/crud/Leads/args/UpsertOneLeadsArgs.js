"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsCreateInput_1 = require("../../../inputs/LeadsCreateInput");
const LeadsUpdateInput_1 = require("../../../inputs/LeadsUpdateInput");
const LeadsWhereUniqueInput_1 = require("../../../inputs/LeadsWhereUniqueInput");
let UpsertOneLeadsArgs = class UpsertOneLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereUniqueInput_1.LeadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsWhereUniqueInput_1.LeadsWhereUniqueInput)
], UpsertOneLeadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsCreateInput_1.LeadsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsCreateInput_1.LeadsCreateInput)
], UpsertOneLeadsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsUpdateInput_1.LeadsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsUpdateInput_1.LeadsUpdateInput)
], UpsertOneLeadsArgs.prototype, "update", void 0);
UpsertOneLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneLeadsArgs);
exports.UpsertOneLeadsArgs = UpsertOneLeadsArgs;
