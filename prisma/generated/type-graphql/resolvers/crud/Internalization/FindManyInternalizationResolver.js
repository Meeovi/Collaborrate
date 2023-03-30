"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyInternalizationArgs_1 = require("./args/FindManyInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const helpers_1 = require("../../../helpers");
let FindManyInternalizationResolver = class FindManyInternalizationResolver {
    async internalizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Internalization_1.Internalization], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInternalizationArgs_1.FindManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyInternalizationResolver.prototype, "internalizations", null);
FindManyInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], FindManyInternalizationResolver);
exports.FindManyInternalizationResolver = FindManyInternalizationResolver;
