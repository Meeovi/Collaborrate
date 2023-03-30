"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyStatesArgs_1 = require("./args/UpdateManyStatesArgs");
const States_1 = require("../../../models/States");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyStatesResolver = class UpdateManyStatesResolver {
    async updateManyStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStatesArgs_1.UpdateManyStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyStatesResolver.prototype, "updateManyStates", null);
UpdateManyStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], UpdateManyStatesResolver);
exports.UpdateManyStatesResolver = UpdateManyStatesResolver;
