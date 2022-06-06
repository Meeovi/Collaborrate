"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesWhereInput_1 = require("../../../inputs/OpportunitiesWhereInput");
let DeleteManyOpportunitiesArgs = class DeleteManyOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereInput_1.OpportunitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereInput_1.OpportunitiesWhereInput)
], DeleteManyOpportunitiesArgs.prototype, "where", void 0);
DeleteManyOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOpportunitiesArgs);
exports.DeleteManyOpportunitiesArgs = DeleteManyOpportunitiesArgs;
