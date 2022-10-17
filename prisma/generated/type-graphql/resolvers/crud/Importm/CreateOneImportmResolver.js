"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneImportmResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneImportmArgs_1 = require("./args/CreateOneImportmArgs");
const Importm_1 = require("../../../models/Importm");
const helpers_1 = require("../../../helpers");
let CreateOneImportmResolver = class CreateOneImportmResolver {
    async createOneImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneImportmArgs_1.CreateOneImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneImportmResolver.prototype, "createOneImportm", null);
CreateOneImportmResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], CreateOneImportmResolver);
exports.CreateOneImportmResolver = CreateOneImportmResolver;
