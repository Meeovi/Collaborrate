"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateCore_storeArgs_1 = require("./args/CreateCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const helpers_1 = require("../../../helpers");
let CreateCore_storeResolver = class CreateCore_storeResolver {
    async createCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCore_storeArgs_1.CreateCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateCore_storeResolver.prototype, "createCore_store", null);
CreateCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], CreateCore_storeResolver);
exports.CreateCore_storeResolver = CreateCore_storeResolver;
