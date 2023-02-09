"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttributesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAttributesOrThrowArgs_1 = require("./args/FindUniqueAttributesOrThrowArgs");
const Attributes_1 = require("../../../models/Attributes");
const helpers_1 = require("../../../helpers");
let FindUniqueAttributesOrThrowResolver = class FindUniqueAttributesOrThrowResolver {
    async findUniqueAttributesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAttributesOrThrowArgs_1.FindUniqueAttributesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAttributesOrThrowResolver.prototype, "findUniqueAttributesOrThrow", null);
FindUniqueAttributesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], FindUniqueAttributesOrThrowResolver);
exports.FindUniqueAttributesOrThrowResolver = FindUniqueAttributesOrThrowResolver;
