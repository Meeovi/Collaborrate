"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCasesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCasesArgs_1 = require("./args/AggregateCasesArgs");
const Cases_1 = require("../../../models/Cases");
const AggregateCases_1 = require("../../outputs/AggregateCases");
const helpers_1 = require("../../../helpers");
let AggregateCasesResolver = class AggregateCasesResolver {
    async aggregateCases(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCases_1.AggregateCases, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCasesArgs_1.AggregateCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCasesResolver.prototype, "aggregateCases", null);
AggregateCasesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cases_1.Cases)
], AggregateCasesResolver);
exports.AggregateCasesResolver = AggregateCasesResolver;
