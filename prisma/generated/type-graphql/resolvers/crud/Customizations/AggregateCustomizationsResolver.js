"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomizationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomizationsArgs_1 = require("./args/AggregateCustomizationsArgs");
const Customizations_1 = require("../../../models/Customizations");
const AggregateCustomizations_1 = require("../../outputs/AggregateCustomizations");
const helpers_1 = require("../../../helpers");
let AggregateCustomizationsResolver = class AggregateCustomizationsResolver {
    async aggregateCustomizations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomizations_1.AggregateCustomizations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomizationsArgs_1.AggregateCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCustomizationsResolver.prototype, "aggregateCustomizations", null);
AggregateCustomizationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customizations_1.Customizations)
], AggregateCustomizationsResolver);
exports.AggregateCustomizationsResolver = AggregateCustomizationsResolver;
