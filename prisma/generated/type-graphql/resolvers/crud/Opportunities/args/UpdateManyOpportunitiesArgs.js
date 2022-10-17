"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesUpdateManyMutationInput_1 = require("../../../inputs/OpportunitiesUpdateManyMutationInput");
const OpportunitiesWhereInput_1 = require("../../../inputs/OpportunitiesWhereInput");
let UpdateManyOpportunitiesArgs = class UpdateManyOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesUpdateManyMutationInput_1.OpportunitiesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesUpdateManyMutationInput_1.OpportunitiesUpdateManyMutationInput)
], UpdateManyOpportunitiesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereInput_1.OpportunitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereInput_1.OpportunitiesWhereInput)
], UpdateManyOpportunitiesArgs.prototype, "where", void 0);
UpdateManyOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOpportunitiesArgs);
exports.UpdateManyOpportunitiesArgs = UpdateManyOpportunitiesArgs;
