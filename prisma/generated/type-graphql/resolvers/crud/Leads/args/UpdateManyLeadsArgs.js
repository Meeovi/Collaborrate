"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsUpdateManyMutationInput_1 = require("../../../inputs/LeadsUpdateManyMutationInput");
const LeadsWhereInput_1 = require("../../../inputs/LeadsWhereInput");
let UpdateManyLeadsArgs = class UpdateManyLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsUpdateManyMutationInput_1.LeadsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsUpdateManyMutationInput_1.LeadsUpdateManyMutationInput)
], UpdateManyLeadsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereInput_1.LeadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsWhereInput_1.LeadsWhereInput)
], UpdateManyLeadsArgs.prototype, "where", void 0);
UpdateManyLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLeadsArgs);
exports.UpdateManyLeadsArgs = UpdateManyLeadsArgs;
