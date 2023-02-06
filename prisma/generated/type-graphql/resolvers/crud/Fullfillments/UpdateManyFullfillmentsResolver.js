"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFullfillmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyFullfillmentsArgs_1 = require("./args/UpdateManyFullfillmentsArgs");
const Fullfillments_1 = require("../../../models/Fullfillments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyFullfillmentsResolver = class UpdateManyFullfillmentsResolver {
    async updateManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFullfillmentsArgs_1.UpdateManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyFullfillmentsResolver.prototype, "updateManyFullfillments", null);
UpdateManyFullfillmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], UpdateManyFullfillmentsResolver);
exports.UpdateManyFullfillmentsResolver = UpdateManyFullfillmentsResolver;
