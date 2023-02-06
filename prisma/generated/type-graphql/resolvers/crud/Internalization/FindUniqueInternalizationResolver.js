"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueInternalizationArgs_1 = require("./args/FindUniqueInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const helpers_1 = require("../../../helpers");
let FindUniqueInternalizationResolver = class FindUniqueInternalizationResolver {
    async internalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInternalizationArgs_1.FindUniqueInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueInternalizationResolver.prototype, "internalization", null);
FindUniqueInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], FindUniqueInternalizationResolver);
exports.FindUniqueInternalizationResolver = FindUniqueInternalizationResolver;
