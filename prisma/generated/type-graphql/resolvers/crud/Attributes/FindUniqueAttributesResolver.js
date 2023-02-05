"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAttributesArgs_1 = require("./args/FindUniqueAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const helpers_1 = require("../../../helpers");
let FindUniqueAttributesResolver = class FindUniqueAttributesResolver {
    async findUniqueAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAttributesArgs_1.FindUniqueAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAttributesResolver.prototype, "findUniqueAttributes", null);
FindUniqueAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], FindUniqueAttributesResolver);
exports.FindUniqueAttributesResolver = FindUniqueAttributesResolver;
