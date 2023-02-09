"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFullfillmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyFullfillmentsArgs_1 = require("./args/DeleteManyFullfillmentsArgs");
const Fullfillments_1 = require("../../../models/Fullfillments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyFullfillmentsResolver = class DeleteManyFullfillmentsResolver {
    async deleteManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFullfillmentsArgs_1.DeleteManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyFullfillmentsResolver.prototype, "deleteManyFullfillments", null);
DeleteManyFullfillmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], DeleteManyFullfillmentsResolver);
exports.DeleteManyFullfillmentsResolver = DeleteManyFullfillmentsResolver;
