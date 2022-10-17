"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCustomizationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCustomizationsArgs_1 = require("./args/FindManyCustomizationsArgs");
const Customizations_1 = require("../../../models/Customizations");
const helpers_1 = require("../../../helpers");
let FindManyCustomizationsResolver = class FindManyCustomizationsResolver {
    async findManyCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customizations_1.Customizations], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomizationsArgs_1.FindManyCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCustomizationsResolver.prototype, "findManyCustomizations", null);
FindManyCustomizationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customizations_1.Customizations)
], FindManyCustomizationsResolver);
exports.FindManyCustomizationsResolver = FindManyCustomizationsResolver;
