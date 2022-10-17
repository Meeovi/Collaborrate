"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneTax_categoryArgs_1 = require("./args/CreateOneTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const helpers_1 = require("../../../helpers");
let CreateOneTax_categoryResolver = class CreateOneTax_categoryResolver {
    async createOneTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_category_1.Tax_category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTax_categoryArgs_1.CreateOneTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTax_categoryResolver.prototype, "createOneTax_category", null);
CreateOneTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], CreateOneTax_categoryResolver);
exports.CreateOneTax_categoryResolver = CreateOneTax_categoryResolver;
