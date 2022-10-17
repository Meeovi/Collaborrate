"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCustomizationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneCustomizationsArgs_1 = require("./args/CreateOneCustomizationsArgs");
const Customizations_1 = require("../../../models/Customizations");
const helpers_1 = require("../../../helpers");
let CreateOneCustomizationsResolver = class CreateOneCustomizationsResolver {
    async createOneCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customizations_1.Customizations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCustomizationsArgs_1.CreateOneCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCustomizationsResolver.prototype, "createOneCustomizations", null);
CreateOneCustomizationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customizations_1.Customizations)
], CreateOneCustomizationsResolver);
exports.CreateOneCustomizationsResolver = CreateOneCustomizationsResolver;
