"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGlossaryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGlossaryArgs_1 = require("./args/AggregateGlossaryArgs");
const Glossary_1 = require("../../../models/Glossary");
const AggregateGlossary_1 = require("../../outputs/AggregateGlossary");
const helpers_1 = require("../../../helpers");
let AggregateGlossaryResolver = class AggregateGlossaryResolver {
    async aggregateGlossary(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGlossary_1.AggregateGlossary, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGlossaryArgs_1.AggregateGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateGlossaryResolver.prototype, "aggregateGlossary", null);
AggregateGlossaryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Glossary_1.Glossary)
], AggregateGlossaryResolver);
exports.AggregateGlossaryResolver = AggregateGlossaryResolver;
