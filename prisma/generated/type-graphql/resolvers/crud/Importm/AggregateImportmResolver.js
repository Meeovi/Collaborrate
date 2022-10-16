"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateImportmResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateImportmArgs_1 = require("./args/AggregateImportmArgs");
const Importm_1 = require("../../../models/Importm");
const AggregateImportm_1 = require("../../outputs/AggregateImportm");
const helpers_1 = require("../../../helpers");
let AggregateImportmResolver = class AggregateImportmResolver {
    async aggregateImportm(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateImportm_1.AggregateImportm, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateImportmArgs_1.AggregateImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateImportmResolver.prototype, "aggregateImportm", null);
AggregateImportmResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], AggregateImportmResolver);
exports.AggregateImportmResolver = AggregateImportmResolver;
